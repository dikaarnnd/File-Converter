"use client"; // Add this directive to mark the file as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { path: '/', name: 'Docx2PDF' },
    { path: '/2_pdf2docx', name: 'PDF2Docx' },
    { path: '/3_ppt2pdf', name: 'PPT2PDF' },
];

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                const isActive = link.path === pathname;
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`font-medium hover:text-accent transition-all ${isActive ? 'text-accent border-b-2 border-accent' : ''}`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
