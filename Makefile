# Variables (TODO: update this after moving to opentofu org)
REPO_URL := https://github.com/opentffoundation/opentf.git
CLONE_DIR := ./opentf-repo
DEST_DIR := .
SOURCE_DIR := website
BRANCH := main

# Default target to execute when 'make' is called without arguments
all: clean clone copy

clean :
	rm -rf $(CLONE_DIR)
	
# Clone the repo
clone: clean
	git clone --depth 1 -b $(BRANCH) $(REPO_URL) $(CLONE_DIR); \

# Ensure the destination directory exists
prepare-dest:
	mkdir -p $(DEST_DIR)/docs

# Copy the entire folder
copy: clone prepare-dest
	cp -v -r $(CLONE_DIR)/$(SOURCE_DIR)/docs/. $(DEST_DIR)/docs/

.PHONY: all clone copy prepare-dest
