package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/gin-gonic/gin"
)

const TEAMS_URL = "https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English_Premier_League"
const TABLE_URL = "https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4328&s=2025-2026"

type Team struct {
	ID        string `json:"idTeam"`
	TeamName  string `json:"strTeam"`
	TeamShort string `json:"strTeamShort"`
	Badge     string `json:"strBadge"`
}

type Response struct {
	Tables []Table `json:"table"`
	Teams  []Team  `json:"teams"`
}

type Table struct {
	Rank     string `json:"intRank"`
	TeamName string `json:"strTeam"`
	Season   string `json:"strSeason"`
	Form     string `json:"strForm"`
	Wins     string `json:"intWin"`
	Losses   string `json:"intLoss"`
}

func getTeams(c *gin.Context) {

	res, err := http.Get(TEAMS_URL)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()

	if res.StatusCode != 200 {
		c.JSON(res.StatusCode, fmt.Sprintf("error with status code: %d", res.StatusCode))
	}

	body, _ := io.ReadAll(res.Body)

	data := &Response{}

	json.Unmarshal(body, &data)
	if len(data.Teams) == 0 {
		c.JSON(400, "Teams not found")
	}

	c.JSON(200, data)
}

func getTable(c *gin.Context) {

	res, err := http.Get(TABLE_URL)
	if err != nil {
		panic(err)
	}

	defer res.Body.Close()

	body, _ := io.ReadAll(res.Body)



	data := &Response{}

	json.Unmarshal(body, &data)

	if len(data.Tables) <= 0 {
		c.JSON(404, "Table not found")
		return
	}

	c.JSON(200, data.Tables)
}
