import React from "react";
import { useState } from "react";

export default function GroupInList({ group }) {
    const [showFriends, setShowFriends] = useState(false);

    const onClickListFriends = () => {
        setShowFriends(!showFriends);
    };

    return (
        <>
            <li key={group.id} className="list-item">
                {group.avatar_color && <div className="group-image" style={{ backgroundColor: group.avatar_color }}></div>}
                <div className="list-item__content">
                    <div>
                        <h3>
                            <a href="/">{group.name}</a>
                        </h3>
                    </div>

                    <div className="list-item__members">
                        <p>{group.closed ? "Закрытая" : "Открытая"}</p>
                        {group.members_count > 0 && <p>{group.members_count} участников</p>}
                        {group.friends && (
                            <div className="list-item__friend">
                                <button onClick={onClickListFriends}>{group.friends?.length} друзей</button>
                                {showFriends && (
                                    <ul className="list-friend">
                                        {group.friends.map((friend) => {
                                            return (
                                                <li className="list-item__friend">
                                                    <a href="/">
                                                        {friend.first_name} {friend.last_name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </li>
        </>
    );
}
