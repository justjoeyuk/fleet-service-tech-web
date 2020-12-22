	aws configure set preview.cloudfront true
	aws cloudfront create-invalidation --distribution-id EUAGIURMAMNXW --paths '/*'
	aws s3 rm s3://staging-admin.tabb.live/static --recursive
	aws s3 rm s3://staging-admin.tabb.live --recursive
	aws s3 sync build/ s3://staging-admin.tabb.live --acl public-read