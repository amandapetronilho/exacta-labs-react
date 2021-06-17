import * as S from "./styles.js";

function Button ({ onClick, children }) {
    return <S.Button onClick={onClick}>{children}</S.Button>
}

export default Button;