import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getListGroup } from "../../redux/slices/groupsSlice";

import GroupInList from "../../components/GroupInList/GroupInList";
import SelectMenu from "../../components/SelectMenu/SelectMenu";

import selectMenuList from "../../assets/database/filterGroups.json";

export default function ListGroupPage() {
    const dispatch = useDispatch();

    const listGroup = useSelector((state) => state.groups.group);
    const resultFetch = useSelector((state) => state.groups.result);
    const isLoading = useSelector((state) => state.groups.isLoading);

    const filterList = useSelector((state) => state.filterGroup);

    useEffect(() => {
        dispatch(getListGroup());
    }, [dispatch]);

    if (isLoading) {
        return <div>Загрузка данных...</div>;
    }

    const filterListGroup = listGroup
        .filter((group) => {
            if (filterList.privacy.select === "Закрытые группы") {
                if (group.closed) {
                    return group;
                }
            } else if (filterList.privacy.select === "Открытые группы") {
                if (!group.closed) {
                    return group;
                }
            } else if (filterList.privacy.select === "Все группы" || filterList.privacy.select === "По типу приватности") {
                return group;
            }
            return null;
        })
        .filter((group) => {
            if (filterList.friends.select === "Без друзей") {
                if (!group.friends) {
                    return group;
                }
            } else if (filterList.friends.select === "С друзьями") {
                if (group.friends) {
                    return group;
                }
            } else if (filterList.friends.select === "Все группы" || filterList.friends.select === "По наличию друзей") {
                return group;
            }
            return null;
        })
        .filter((group) => {
            if (filterList.avatarColor.select === group.avatar_color) {
                return group;
            } else if (filterList.avatarColor.select === "Все аватарки" || filterList.avatarColor.select === "По цвету аватарки") {
                return group;
            }
            return null;
        });

    return (
        <>
            <div className="select-items">
                {selectMenuList.map((item) => (
                    <SelectMenu key={item.id} title={item.select} variants={item.variants} listGroup={listGroup} />
                ))}
            </div>
            {resultFetch ? (
                <ul className="list-group">
                    {filterListGroup.length > 0 ? (
                        filterListGroup.map((group) => {
                            return <GroupInList key={group.id} group={group} />;
                        })
                    ) : (
                        <div>Группы с такими фильтрами не найдены</div>
                    )}
                </ul>
            ) : (
                <div>Ошибка при загрузке групп. Попробуйте позже</div>
            )}
        </>
    );
}
