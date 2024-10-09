MYDIR = .
MD_FILES := $(wildcard $(MYDIR)/*.md)
HTML_FILES := $(MD_FILES:.md=.html)

.PHONY: all
all: $(HTML_FILES)
	@echo "All HTML files are up to date."

%.html: %.md monospace/template.html Makefile
	pandoc --toc -s --css monospace/reset.css --css monospace/index.css --css monospace-add.css -i $< -o $@ --template=monospace/template.html

index.html: index.md template.html Makefile
	pandoc --toc -s --css monospace/reset.css --css monospace/index.css -i $< -o $@ --template=monospace/template.html
