let n = 10

for (let i = 1; i <= n; i++) {

    console.log(i)

    if (i == 5)
        continue

    if (i == 8)
        break

    console.log(i + 1)
}