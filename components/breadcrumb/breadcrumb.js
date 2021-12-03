import React from 'react'

const BreadCrumb = ({ pageName, pageRoute, props }) => {
    return (
        <nav className="text-sm text-left bg-footerDarkBlue h-16 flex items-center justify-end" role="alert" {...props}>
            <ul className="list-reset flex text-white mr-5">
                <li><a href="/" className="font-bold text-white font-WorkSans">Anasayfa</a></li>
                <li><span className="mx-2">→</span></li>
                <li><a href={pageRoute} className="font-bold text-white font-WorkSans">{pageName}</a></li>
            </ul>
        </nav>
    )
}

export default BreadCrumb
