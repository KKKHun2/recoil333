import { useRecoilValue } from "recoil";
import { MemoAtom } from "../recoil/MemoAtom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  background-color: #40739e;
  color: white;
`;

const MemoBox = styled.div`
  border: 2px solid #1e3799;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  width: 60%;
`;

const MemoTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MemoContent = styled.div`
  font-size: 16px;
  color: #ccc;
`;

function Box() {
  const meMoItem = useRecoilValue(MemoAtom);
  return (
    <Container>
      <h1>메모장</h1>
      {meMoItem.map((memo) => (
        <MemoBox key={memo.memoN}>
          <MemoTitle>{memo.title}</MemoTitle>
          <MemoContent>{memo.text}</MemoContent>
        </MemoBox>
      ))}
    </Container>
  );
}

export default Box;
