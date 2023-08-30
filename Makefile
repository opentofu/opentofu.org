# Variables
REPO_URL := git@github.com:opentffoundation/opentf.git
CLONE_DIR := ./opentf-repo
DEST_DIR := .
SOURCE_DIR := website
BRANCH := main

# Default target to execute when 'make' is called without arguments
all: clone copy

# Clone the repo
clone:
	# If the directory doesn't exist, perform a shallow clone and checkout the specified branch
	@if [ ! -d "$(CLONE_DIR)" ]; then \
		git clone --depth 1 -b $(BRANCH) $(REPO_URL) $(CLONE_DIR); \
	else \
		cd $(CLONE_DIR) && git checkout $(BRANCH) && git pull --depth 1; \
	fi

# Ensure the destination directory exists
prepare-dest:
	@mkdir -p $(DEST_DIR)/docs
	@mkdir -p $(DEST_DIR)/data

# Copy the entire folder
copy: clone prepare-dest
# echo what we're copying
	cp -v -r $(CLONE_DIR)/$(SOURCE_DIR)/docs/ $(DEST_DIR)/docs
	cp -v -r $(CLONE_DIR)/$(SOURCE_DIR)/data/ $(DEST_DIR)/data

.PHONY: all clone copy prepare-dest