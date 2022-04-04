import React from 'react';

function Header(props){
    const { name, alamat, gantiNama} = props;
    return <>
    <div>
        Ini Header, Nama Saya {name}, Saya tinggal di {alamat} 
    </div>
        <input type='text' value={name} onChange={gantiNama}/>
    </>
}

export default Header;