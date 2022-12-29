import NavigationBar from "../components/NavigationBar";
import * as React from "react";

const tags = [
    {tag: 'academic'},
    {tag: 'romantic'},
    {tag: 'friendship'},
    {tag: 'life'},
    {tag: 'family'},
    {tag: 'emo'}
]
const AdminPage = () => {
    return (
        <>
            <NavigationBar/>
            <div>I'm a admin and I'm the best!</div>
            {/*<Sizes/>*/}
            {/*<div>{tags.map((name) => (
                <MenuItem
                    key={name}
                    value={name}
                >
                    {name}
                </MenuItem>
            ))}</div>*/}
        </>
    )
}

export default AdminPage;