@echo off

if not exist test_data (
	md test_data
	curl.exe -Lo test_data\deno_favicon.ico https://deno.land/favicon.ico
	curl.exe -Lo test_data\big_list_of_naughty_strings.txt https://raw.githubusercontent.com/minimaxir/big-list-of-naughty-strings/master/blns.txt
	curl.exe -Lo test_data\deno.zip https://github.com/denoland/deno/releases/download/v1.2.1/deno-x86_64-pc-windows-msvc.zip
	tar.exe xf test_data\deno.zip -C test_data 
)

deno.exe test --allow-read --allow-write test.ts
