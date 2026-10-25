import { Container, styled } from "@mui/material"

const StyledBodyContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        textAlign: "center",
        color: "white",
        display: "flex",
        flex: 1,
        minHeight: "55vh",
        justifyContent: "center",
        flexDirection: "column",
        lineHeight: 1.6,
        "& h1": {
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
        },
        "& p": {
            color: "rgba(248, 245, 250, 0.7)",
            fontSize: "1.15rem",
        },
        "a": {
            color: "#bc5dc8",
            textDecoration: "none",
            "&:hover": {
                color: "#ea94f4",
            },
        },
    }
}))

function Status({ }) {
    return (
        <StyledBodyContainer>
            <h1>Nothing to see here!</h1>
            <p>For now...</p>
        </StyledBodyContainer>
    )
}

export default Status