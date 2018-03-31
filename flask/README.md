download url files:
def download_urls(urls):
    downloaded = 0

    # Use concurrent.futures to create a pool of worker threads
    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = set()
        for url in urls:
            # Create a future for each url
            futures.add(executor.submit(download_url, url))

            # Bound the results so that `futures` doesn't take up too much memory
            while len(futures) >= 1000:
                done, futures = concurrent.futures.wait(futures, return_when=concurrent.futures.FIRST_COMPLETED)
                for future in done:
                    try:
                        future.result()
                        downloaded += 1
                    except Exception as e:
                        print(e)

        # Process the remaining futures
        for future in concurrent.futures.as_completed(futures):
            try:
                future.result()
                downloaded += 1
            except Exception as e:
                print(e)

    print('Downloaded {} files successfully.'.format(downloaded))

