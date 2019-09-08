/**
 * 라우터를 정의하기 위한 파일입니다
 */
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Main from './components/layout/Main';
import Board from './components/board/Board';
import BoardMain from './components/board/Board_main';
import BoardList from "./components/board/Board_list";
import BoardView from "./components/board/Board_view";
import BoardWrite from "./components/board/Board_write";

export default[
  {
    path: '/',
    components: {
      default: Main,
      header: Header,
      sideBar: SideBar
    },
    redirect: '/board',
    children: [
      {
        path: 'board', 
        component: Board, 
        children: [
          {path: '', component: BoardMain},
          {path: ':boardid', component: BoardList, children: [
            {path: 'write', component: BoardWrite},
            {path: 'post/:postid', component: BoardView},
            {path: 'post/:postid/update', component: BoardWrite},
          ]},
        ]
      },
    ]
  },
  
];