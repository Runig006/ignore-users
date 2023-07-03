<?php

namespace FoF\IgnoreUsers\Filters;

use Flarum\Filter\FilterState;
use Flarum\Query\QueryCriteria;
use Flarum\Search\AbstractRegexGambit;
use Flarum\Search\SearchState;

class IgnoredFilter extends AbstractRegexGambit
{

    public function getGambitPattern()
    {
        return 'is:ignor(?:ing|ed)';
    }

    public function __invoke(FilterState $state, QueryCriteria $queryCriteria)
    {
        $this->buildQuery($state->getActor(), $state->getQuery());
    }

    protected function conditions(SearchState $state, array $matches, $negate)
    {
        $this->buildQuery($state->getActor(), $state->getQuery(), $negate);
    }

    private function buildQuery($actor, $query, $negate = false)
    {
        $preferences = $actor->preferences;
        if (
            $actor->isGuest() ||
            isset($preferences['ignoreDiscussion']) == false ||
            $preferences['ignoreDiscussion'] === false
        ) {
            return;
        }
        $field = $query->from == "users" ? 'id' : 'user_id';
        $function = $negate ? "whereIn" : "whereNotIn";
        $ignored = $actor->ignoredUsers->pluck('id');
        $query->$function($field, $ignored);
    }
}
