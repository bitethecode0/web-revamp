import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoIosStar />,
    cName: 'nav-text'
  },
  {
    title: 'Articles',
    path: '/articles',
    icon: <IoIcons.IoIosBook />,
    cName: 'nav-text'
  }
];
