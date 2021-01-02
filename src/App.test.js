import App from './App';
import React from "react"
import { mount } from 'enzyme';

describe("todo list", () => {
  let wrapper
  let button
  let list
  let input

  const addToList = (newItem, input, button) => {
    input.simulate("change", { target: { value: newItem } })
    button.simulate("click")
  }

  beforeEach(() => {
    wrapper = mount(<App />)
    button = wrapper.find(".button")
    list = wrapper.find(".list")
    input = wrapper.find(".input")
  })

  it("renders a title", () => {
    expect(wrapper.find(".title").text()).toBe("Todo List")
  })

  it("renders a text input", () => {
    expect(input.length).toBe(1)
  })

  it("renders an add item button", () => {
    expect(button.length).toBe(1)
  })

  it("renders todo list", () => {
    expect(list.length).toBe(1)
  })

  it("renders an empty list message if it is so", () => {
    expect(list.text()).toBe("No items added yet")
  })

  it("changes input", () => {
    input.simulate("change", { target: { value: "buy pasta" } })
    const inputUpdated = wrapper.find(".input")
    expect(inputUpdated.props().value).toBe("buy pasta")
  })

  it("rejects empty strings", () => {
    button.simulate("click")
    expect(wrapper.find("li").length).toBe(0)
  })

  it("appends an item to list", () => {
    addToList("buy pasta", input, button)
    expect(wrapper.find("li").at(wrapper.find("li").length - 1).text()).toBe("buy pasta")
  })

  it("resets input on submit", () => {
    addToList("buy pasta", input, button)
    expect(wrapper.find(".input").props().value).toBe("")
  })

  it("appends many items to list", () => {
    addToList("buy pasta", input, button)
    addToList("finish remodeling", input, button)
    addToList("go to school", input, button)
    expect(wrapper.containsAllMatchingElements(["buy pasta", "go to school", "finish remodeling"])).toEqual(true)
  })

  it("does not accept duplicates", () => {
    addToList("buy pasta", input, button)
    addToList("finish remodeling", input, button)
    addToList("buy pasta", input, button)
    const numberOfPasta = wrapper.find("li").filterWhere(item => item.text() === "buy pasta")
    expect(numberOfPasta.length).toBe(1)
  })

})