import { render, screen } from "@testing-library/react"
import Header from "./Header/Header";
test('Search input should be rendered', ()=>{
    render(<Header />);
    const userInputEl = screen.getByPlaceholderText(/Country's name.../i);
    expect(userInputEl).toBeInTheDocument()
})
test('Search button should be rendered', ()=>{
    render(<Header />);
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeInTheDocument()
})