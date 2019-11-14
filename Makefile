.PHONY: preview

preview:
	rm -f getshfter-detector.zip
	git archive master --format zip -o getshfter-detector.zip
	unzip -l getshfter-detector.zip
