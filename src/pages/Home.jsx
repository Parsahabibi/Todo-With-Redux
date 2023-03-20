import { Grid } from '@mui/material'
import React, { useState } from 'react'
import HomeHeader from '../components/HomeHeader'

const Home = () => {

  const emptyForm = { id: Math.floor(Math.random() * 1000), title: "" }
  const [form, setForm] = useState(emptyForm)
  const [text, setText] = useState(form);

  return (
    <Grid>
      <HomeHeader form={form} setForm={setForm} text={text} setText={setText} />
    </Grid>
  )
}

export default React.memo(Home)