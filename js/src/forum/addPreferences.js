import { extend, override } from 'flarum/common/extend';
import FieldSet from 'flarum/common/components/FieldSet';
import SettingsPage from 'flarum/common/components/SettingsPage';
import Switch from 'flarum/common/components/Switch';
import ItemList from 'flarum/common/utils/ItemList';

export default function () {
    extend(SettingsPage.prototype, 'settingsItems', function (items) {
        items.add(
            'check-ignore-discussion',
            FieldSet.component(
                {
                    label: app.translator.trans('fof-ignore-users.forum.settings.discussion'),
                    className: 'ignore-discussion',
                },
                this.ignorediscussion().toArray()
            )
        );
    });

    SettingsPage.prototype['ignorediscussion'] = function () {
        const items = new ItemList();
        items.add(
            'check-ignore-discussion',
            Switch.component(
                {
                    state: this.user.preferences().ignoreDiscussion,
                    onchange: (value) => {
                        this.ignoreDiscussion = value;
                        this.user.savePreferences({ ignoreDiscussion: value }).then(() => {
                            m.redraw();
                        });
                    },
                },
                app.translator.trans('fof-ignore-users.forum.settings.discussion')
            )
        );
        return items;
    };
}