import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setPrivacy, setAvatarColor, setFriends } from "../../redux/slices/filterSlice";

export default function SelectMenu({ title, variants, listGroup }) {
    const dispatch = useDispatch();

    let nameFilters = title;

    const [open, setOpen] = useState(false);

    const [selectFilters, setSelectFilters] = useState(nameFilters);

    let variantsColor = [];

    listGroup.map((group) => {
        if (group.avatar_color) {
            return variantsColor.push(group.avatar_color);
        }
        return null;
    });

    const onClickFilters = (item) => {
        setSelectFilters(item);
        setOpen(false);

        if (nameFilters === "По типу приватности") {
            onChangePrivacyValue(item);
        }
        if (nameFilters === "По цвету аватарки") {
            onChangeAvatarColorValue(item);
        }
        if (nameFilters === "По наличию друзей") {
            onChangeFriendsValue(item);
        }
    };

    const onChangePrivacyValue = (item) => {
        console.log(item);
        dispatch(setPrivacy(item));
    };
    const onChangeAvatarColorValue = (item) => {
        dispatch(setAvatarColor(item));
    };
    const onChangeFriendsValue = (item) => {
        dispatch(setFriends(item));
    };

    useEffect(() => {}, [dispatch]);

    return (
        <>
            <div className="select-box">
                <div className="button-select" onClick={() => setOpen(!open)}>
                    <p>{selectFilters}</p>
                    <i className="ri-arrow-down-s-fill"></i>
                </div>
                {open && (
                    <ul className="select-items__list active">
                        {nameFilters === "По цвету аватарки"
                            ? variantsColor.map((item, index) => (
                                  <li key={index} onClick={() => onClickFilters(item)} className="select-item__list">
                                      {item}
                                  </li>
                              ))
                            : variants.map((item, index) => (
                                  <li key={index} onClick={() => onClickFilters(item)} className="select-item__list">
                                      {item}
                                  </li>
                              ))}
                    </ul>
                )}
            </div>
        </>
    );
}
