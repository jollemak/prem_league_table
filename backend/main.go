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

	// r.Static("/", "./dist")

 // Group API routes under the /api prefix
    api := r.Group("/api")
    {
        api.GET("/", func(ctx *gin.Context) {
            ctx.JSON(200, gin.H{
                "message": "Welcome To Football API",
                "routes":  "/api/table, /api/teams",
            })
        })

        api.GET("/table", getTable)
        api.GET("/teams", getTeams)
    }

	fmt.Println("Running on: http://localhost:8080")
	r.Run(":8080")

}
