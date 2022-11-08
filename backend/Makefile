help:
		@clear
		@echo ""
		@echo "==========================================================="
		@echo ""
		@echo "  ** DOCKER COMMANDS **"
		@echo ""
		@echo "      build      - build containers"
		@echo "      start      - run containers"
		@echo "      stop       - stop containers gracefully"
		@echo "      kill       - stop containers forcefully"
		@echo "      restart    - restart containers"
		@echo "      status     - check status of running containers"
		@echo ""
		@echo "  ** DEV COMMANDS **"
		@echo "      python     - Run python commands like manage.py"
		@echo "==========================================================="



# Docker Commands
# -----------
build:
		$(info Building containers.)
		@docker-compose build
start:
		$(info Starting containers.)
		@docker-compose up

stop:
		$(info Stopping containers.)
		@docker-compose stop
kill:
		$(info Killing containers.)
		@docker-compose kill
restart:
		$(info Restarting containers.)
		@docker-compose restart
status:
		@docker-compose ps

prune:
		$(info Clearing unused images.)
		@docker system prune -af

# Dev commands
# All below commands require active docker container running the backend
python:
		@docker exec -it blog_project bash
