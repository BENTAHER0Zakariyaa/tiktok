const express = require('express')
const app = express()

const { tiktokdownload } = require('tiktok-scraper-without-watermark')

const APP_TOKEN = '463asdf46sdfjiugbjfwef4653sdf'

app.use(express.json())

app.post('/getVideo', (req, res)=>{
    const { url_video } = req.body
    if (!!req.header('authorization') && req.header('authorization').split(' ')[1]===APP_TOKEN) {
        tiktokdownload(url_video).then(result => {
            if (!!result.nowm) {
                res.json({
                    error : false,
                    message : 'SUCCESS',
                    video : result.nowm
                }).status(200)
            } else {
                res.json({
                    error : true,
                    message : 'DOES_NOT_EXIST'
                }).status(200)
            }
        })
    } else {
        res.json({
            error : true,
            message : 'UNAUTHORIZED'
        }).status(405)
    }
})

app.all('*', (req, res)=>{
    res.status(404).json({
        message : 404
    })
})

module.exports = app