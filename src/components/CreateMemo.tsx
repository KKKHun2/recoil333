import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { MemoAtom } from "../recoil/MemoAtom";
import styled from "styled-components";
import { nanoid } from 'nanoid';

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  width: 300px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #718093;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ErrorText = styled.span`
  font-size: 14px;
  color: red;
`;

interface IForm {
  Mtitle: string;
  Mtext: string;
}

function CreateMemo() {
  const setToDos = useSetRecoilState(MemoAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IForm>();
  
  const handleValid = ({ Mtitle, Mtext }: IForm) => {
    setToDos((oldMemo) => [
      ...oldMemo,
      {
        memoN: nanoid(),
        title: Mtitle,
        text: Mtext
      }
    ]);
    setValue("Mtitle", "");
    setValue("Mtext", ""); 
  };

  return (
    <TodoForm onSubmit={handleSubmit(handleValid)}>
      <TodoBody>
        <Input
          {...register("Mtitle", {
            required: true,
            minLength: 5,
          })}
          placeholder="메모 제목"
        />
        {errors.Mtitle && <ErrorText>제목을 5자 이상 입력하세요.</ErrorText>}
        <Input
          {...register("Mtext", {
            required: true,
            minLength: 10,
          })}
          placeholder="메모 내용"
        />
        {errors.Mtext && <ErrorText>내용을 10자 이상 입력하세요.</ErrorText>}
        <Button type="submit">저장!</Button>
      </TodoBody>
    </TodoForm>
  );
}

export default CreateMemo;
