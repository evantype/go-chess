package main

import (
	"fmt"
	"math/rand"
	"net/http"
	"time"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir(".")))
	http.ListenAndServe(":8070", nil)
}

func homePage(w http.ResponseWriter, r *http.Request) {
	rand.Seed(time.Now().UnixNano())
	secretNumber := rand.Intn(10) + 1
	fmt.Fprintf(w, "Загаданное число: %d\n", secretNumber) // только для демонстрации, в настоящей игре это было бы нечестно!
}
