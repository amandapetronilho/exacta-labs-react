import * as S from "./styles.js";

function Input ({ icon, value, onChange}) {
    return (
        <S.Wrapper>
            {icon}
            <S.InputWrapper>
                <S.Input value={value} onChange={onChange} />

                <S.CancelIcon />
            </S.InputWrapper>
        </S.Wrapper>
    );
}

export default Input;