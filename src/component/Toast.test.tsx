import { render, screen } from "@testing-library/react"
import Toast from "./Toast/Toast";

test("Test toast in the document", ()=>{
    render(<Toast/>);
    const toastHere = screen.getByTestId("toast");
    expect(toastHere).toBeInTheDocument();
})
