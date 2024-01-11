export type BoardPropsType = {
  title?: string
  thumbnails?: string[]
}

const Board = ({ title = '(No title)', thumbnails }: BoardPropsType) => (
  <>
    <div className="board-entry media-thumbnail" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(20, 20, 20, 0.52), rgba(100, 100, 100, 0.73)), url(${thumbnails?.[0]})`
      }}>
      <div className="board-title">{ title }</div>
    </div>
  </>
);

export default Board;
