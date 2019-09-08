/**
 * 라우터를 정의하기 위한 파일입니다
 */
import BoardList from "./components/board/BoardList.vue"
import BoardView from "./components/board/Board_view.vue";
import BoardWrite from "./components/board/Board_write.vue";

export default[
  {
    path: '/board/:boardid', 
    component: BoardList, 
    children: [
      {path: 'write', component: BoardWrite},
      {path: 'post/:postid', component: BoardView},
      {path: 'post/:postid/update', component: BoardUpdate},
    ]},
  

]