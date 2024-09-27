import { v4 as uuid } from 'uuid';
import Icon from '@mdi/react';
import { mdiCircleSmall } from '@mdi/js'; // Import a small circle icon
import { mdiCalendar } from '@mdi/js';

export const DashboardMenu = [
  {
    id: uuid(),
    title: 'Dashboard',
    icon: 'home',
    link: '/dashboard/overview',
    isAuthenticated: true,
  },
  // Add group title for 'Team Management'
  {
    id: uuid(),
    title: 'TEAM MANAGEMENT',
    grouptitle: true, // Group Title
  },
  {
    id: uuid(),
    title: 'Worker',
    icon: 'user',
    children: [
      { id: uuid(), link: '/dashboard/workers/create-worker', name: <><Icon path={mdiCircleSmall} size={0.8} /> Add New Worker</>, isAuthenticated: true }, 
      { id: uuid(), link: '/dashboard/workers/worker', name: <><Icon path={mdiCircleSmall} size={0.8} /> All Workers</>, isAuthenticated: true },
      { id: uuid(), link: '/dashboard/workers/schedules', name: <><Icon path={mdiCircleSmall} size={0.8} /> Work Schedules</>, isAuthenticated: true },
    ],
  },
  // Add group title for 'Project Management'
  {
    id: uuid(),
    title: 'PROJECT MANAGEMENT',
    grouptitle: true, // Group Title
  },
  {
    id: uuid(),
    title: 'Jobs',
    icon: 'map',
    children: [
      { id: uuid(), link: '/dashboard/jobs/create-jobs', name: <><Icon path={mdiCircleSmall} size={0.8} /> Add Job</>, isAuthenticated: true },
      { id: uuid(), link: '/dashboard/jobs/list-jobs', name: <><Icon path={mdiCircleSmall} size={0.8} /> All Jobs</>, isAuthenticated: true },
    ],
  },
  {
    id: uuid(),
    title: 'Calendar',
    icon: <Icon path={mdiCalendar} className="nav-icon me-2" size={0.8} />,
    link: '/dashboard/calendar',
    isAuthenticated: true,
  },
];

export default DashboardMenu;



// import { v4 as uuid } from 'uuid';
// import { useRouter } from 'next/router';

// /**
//  * All Dashboard Routes
//  * Understanding name/value pairs for Dashboard routes
//  * ...
//  */

// // import MDI icons
// import Icon from '@mdi/react';
// import { mdiTrello, mdiCalendar } from '@mdi/js';

// export const DashboardMenu = [
//   {
//     id: uuid(),
//     title: 'Dashboard',
//     icon: 'home',
//     link: '/dashboard/overview',
//     isAuthenticated: true, // Add an authentication flag for this route
//   },
//   {
//     id: uuid(),
//     title: 'Workers',
//     icon: 'user',
//     children: [
//       { id: uuid(), link: '/dashboard/workers/create-worker', name: 'Create', isAuthenticated: true }, // Add authentication flag for sub-routes
//       { id: uuid(), link: '/dashboard/workers/worker', name: 'List', isAuthenticated: true },
     
//       { id: uuid(), link: '/dashboard/workers/schedules', name: 'Schedules', isAuthenticated: true },
//     ],
//   },
//   {
//     id: uuid(),
//     title: 'Jobs',
//     icon: 'map',
//     children: [
//       { id: uuid(), link: '/dashboard/jobs/create-jobs', name: 'Create', isAuthenticated: true },
//       { id: uuid(), link: '/dashboard/jobs/list-jobs', name: 'List', isAuthenticated: true },
//     ],
//   },
//   {
//     id: uuid(),
//     title: 'Calendar',
//     icon: <Icon path={mdiCalendar} className="nav-icon me-2" size={0.8} />,
//     link: '/dashboard/calendar',
//     isAuthenticated: true,
//   },
//   // {
//   //   id: uuid(),
//   //   title: 'Settings',
//   //   grouptitle: true,
//   // },
//   // {
//   //   id: uuid(),
//   //   title: 'Site Settings',
//   //   icon: 'settings',
//   //   children: [
//   //     { id: uuid(), link: '/dashboard/settings/general', name: 'General', isAuthenticated: true },
//   //   ],
//   // },
// ];

// export default DashboardMenu;


// // import { v4 as uuid } from 'uuid';
// // /**
// //  *  All Dashboard Routes
// //  *
// //  *  Understanding name/value pairs for Dashboard routes
// //  *
// //  *  Applicable for main/root/level 1 routes
// //  *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
// //  *
// //  *  Applicable for main/root/level 1 and subitems routes
// //  * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
// //  *  title 		: String - If menu contains childern use title to provide main menu name.
// //  *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
// //  * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
// //  *
// //  *  Applicable for subitems / children items routes
// //  *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
// //  *  children	: Array - Use to specify submenu items
// //  *
// //  *  Used to segrigate menu groups
// //  *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
// //  *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
// //  *
// //  */

// // // import MDI icons
// // import Icon from '@mdi/react';
// // import { mdiTrello, mdiCalendar } from '@mdi/js';

// // export const DashboardMenu = [


// // 	{
// // 		id: uuid(),
// // 		title: 'Dashboard',
// // 		icon: 'home',
// // 		link: '/dashboard/overview'
// // 	},
// // 	{
// // 		id: uuid(),
// // 		title: 'Workers',
// // 		icon: 'user',
// // 		children: [
// // 			{ id: uuid(), link: '/dashboard/workers/create-worker', name: 'Create' },
// // 			{ id: uuid(), link: '/dashboard/workers/worker', name: 'List' },
// // 			{ id: uuid(), link: '/dashboard/workers/schedules', name: 'Schedules' },
			
// // 		]
// // 	},
// // 	{
// // 		id: uuid(),
// // 		title: 'Jobs',
// // 		icon: 'map',
// // 		children: [
// // 			{ id: uuid(), link: '/dashboard/jobs/create-jobs', name: 'Create' },
// // 			{ id: uuid(), link: '/dashboard/jobs/list-jobs', name: 'List' },
// // 		]
// // 	},


// // 	{
// // 		id: uuid(),
// // 		title: 'Calendar',
// // 		icon: <Icon path={mdiCalendar} className="nav-icon me-2" size={0.8} />,
// // 		link: '/dashboard/calendar'
// // 	},
// // 	{
// // 		id: uuid(),
// // 		title: 'Settings',
// // 		grouptitle: true
// // 	},
	
// // 	{
// // 		id: uuid(),
// // 		title: 'Site Settings',
// // 		icon: 'settings',
// // 		children: [
// // 			{ id: uuid(), link: '/dashboard/settings/general', name: 'General' },
			
// // 		]
// // 	},

// // ];

// // export default DashboardMenu;
