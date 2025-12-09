import styled from "styled-components";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 40px 32px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
    font-size: 26px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 14px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #dddddd;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #6c5ce7;
    }
`;

const ErrorText = styled.span`
    color: #d63031;
    font-size: 12px;
    margin-top: 4px;
`;

const Button = styled.button`
    padding: 14px;
    background-color: #6c5ce7;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        background-color: #574bd6;
    }
`;
type FormValues = {
    username: string;
    password: string;
    name: string;
    email: string;
}

function SignUp() {
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();


    const onSubmit = (data:FormValues) => {

        const queryString = new URLSearchParams(data).toString();
        navigate(`/result?${queryString}`);
    };

    return (
        <Wrapper>
            <Card>
                <Title>회원가입</Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup>
                        <Input placeholder={"아이디"}
                               {...register("username",{
                                   required:"아이디를 입력해주세요"
                               })} />
                        {errors.username &&
                            <ErrorText>{errors.username}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input
                            type={"password"}
                            placeholder={"비밀번호"}
                            {...register("password", {
                                required:"비밀번호를 입력해주세요",
                                minLength:{
                                    value:6,
                                    message:"비밀번호는 최소 6자 이상이어야 합니다. "
                                }
                            })}
                        />
                        {errors.password &&
                            <ErrorText>{errors.password.message}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이름"}
                               {...register("name",{
                                   required: "이름을 입력해주세요"
                               })}/>
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이메일"}
                               {...register("email", {
                                   required:"이메일을 입력해주세요",
                                   pattern:{
                                       value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                                       message:"올바른 이메일 형식이 아닙니다. "
                                   }
                               })}/>
                        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                    </InputGroup>
                    <Button>회원가입</Button>
                </Form>
            </Card>
        </Wrapper>
    );
}

export default SignUp;