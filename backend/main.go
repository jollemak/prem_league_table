package main

import (
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)

	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"message": "Welcome To Football API",
			"routes":  "/table, /teams",
		})
	})

	r.GET("/table", getTable)
	r.GET("/teams", getTeams)

	fmt.Println("Running on: http://localhost:8080")
	r.Run(":8080")

}
