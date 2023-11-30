import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { MemoAtom } from "../recoil/MemoAtom";
import styled from "styled-components";
import { nanoid } from 'nanoid';

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: auto;
`;

const TodoBody = styled.div`
  display: flex;
  margin: 10px;
`;

const Todospan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
  font-size: 17px;
  color: red;
`;

const Input = styled.input`
  :focus {
    border: solid 3px #e84118;
  }
  border-radius: 8px;
`;

const Button = styled.button`
  margin-left: 3px;
  background-color: #718093;
  width: 60px;
`;

interface IForm {
  Mtitle: string;
  Mtext:string
}

function CreateMemo() {
  const setToDos = useSetRecoilState(MemoAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IForm>();
  const handleValid = ({ Mtitle,Mtext }: IForm) => {
    setToDos((oldMemo) => [
      ...oldMemo,
      {
        memoN: nanoid(), // 타입 변경으로 인해 문자열로 생성됨
        title: Mtitle,
        text: Mtext
      }
    ]);
    setValue("Mtitle", "Mtext");
  };
  return (
    <TodoForm onSubmit={handleSubmit(handleValid)}>
      <TodoBody>
      <Input
          {...register("Mtitle", {
            required: "메모 제목"
          })}
          placeholder="메모 제목"
        />
        <Input
          {...register("Mtext", {
            required: "메모내용!"
          })}
          placeholder="메모내용"
        />
        <Button type="submit">저장!</Button>
      </TodoBody>
      <Todospan>
        <hr />
        <span>{errors?.Mtext?.message}</span>
      </Todospan>
    </TodoForm>
  );
}

export default CreateMemo;
