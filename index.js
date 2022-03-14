"use strict"

import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"

const app = express()

app.use(cookieParser())

app.get("/files/*", (req, res, next) => {
  if (!req.cookies["authorization"] || req.cookies["authorization"] !== "foo") {
    res.sendStatus(403)
  } else {
    next()
  }
})

app.use(
  express.static("public", {
    dotfiles: "ignore",
  })
)

const server = app.listen(process.env.PORT ?? 8080, () => {
  console.info(`Server listening on port ${server.address().port}`)
})
