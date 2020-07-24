import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `red` }}>
      <Header headerText="About Gatsby" />
      <Header headerText="Also Generated from Header Sub-Component" />
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  )
}
