build:
	echo meals build
	@cgroupfs-mount || true
	docker build -t meals .

	@docker stop cmeals || true
	@docker rm cmeals || true

	docker run -d -p 80:80 --name cmeals meals

git:
	git pull