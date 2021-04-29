function toggleMenu(id) {
    if (id === 'menu') {
        var x = document.getElementById(id);
        var hamburger = document.getElementById('menu-open');
        var close = document.getElementById('menu-close');
        if (x.style.display === 'block') {
            x.style.display = 'none';
            hamburger.style.display = 'block';
            close.style.display = 'none';
        } else {
            x.style.display = 'block';
            hamburger.style.display = 'none';
            close.style.display = 'block';
        }
    } else {
        // var links = [document.getElementById('sublinks-1'), 
        //                 document.getElementById('sublinks-2'), 
        //                 document.getElementById('sublinks-3')];
        // for(let i = 0; i < links.length; i++) {
        //     links[i].style.display = 'none';
        // }
        // if (id === 'submenu-1') {
        //     if (links[0].style.display === 'block') {
        //         links[0].style.display = 'none';
        //     } else {
        //         links[0].style.display = 'block';
        //     }
        // } else if (id === 'submenu-2') {
        //     if (links[1].style.display === 'block') {
        //         links[1].style.display = 'none';
        //     } else {
        //         links[1].style.display = 'block';
        //     }
        // } else {
        //     if (links[2].style.display === 'block') {
        //         links[2].style.display = 'none';
        //     } else {
        //         links[2].style.display = 'block';
        //     }
        // }
        let sublinks = document.getElementById(id);
        let children = sublinks.children;
        for(let i = 0; i < children.length; i++) {
            if (children[i].className.includes('-active')) {
                children[i].className = children[i].className.split(" ")[0];
            } else {
                children[i].className += ` ${children[i].className}-active`;
            }
        }
    }
}