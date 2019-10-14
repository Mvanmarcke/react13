import React from 'react';
import Contact from './Contact.js';
let ContactList = () => {
    const contactlist = [
        {
            avatar: "https://generation-nintendo.com/images/encyclopedie/zfd1liem.jpg",
            name: "Ayo",
            online: true
        },
    
        {       
            avatar: "https://generation-nintendo.com/images/encyclopedie/sfluv8gz.jpg",
            name: "Oly",
            online: false
        },
        {
            avatar: "https://risibank.fr/cache/stickers/d469/46987-full.jpg",
            name: "David",
            online: true
        },
        {
            avatar: "https://image.noelshack.com/fichiers/2017/19/1494361757-larryb.png",
            name: "Larry",
            online: true
        },
        {
            avatar: "https://image.noelshack.com/fichiers/2016/48/1480881905-ovni-6.png",
            name: "L'OVNI",
            online: false
        }
    ]
    return (
        <div>
            {
                contactlist.map(contact => {
                    return <Contact avatar={contact.avatar} name={contact.name} online={contact.online}/>
                })
            }
        </div>
    )
} 

export default ContactList;
