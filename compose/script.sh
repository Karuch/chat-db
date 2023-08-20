container_name_or_id="db"

# Run docker inspect and store the result in a variable
ip=$(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' "$container_name_or_id")

# Check if the inspect result is not empty
if [ -n "$inspect_result" ]; then
    # Assign the inspect result to an environment variable
    export IP="$inspect_result"
    echo "IP address of $container_name_or_id is set to $IP"
else
    echo "Unable to retrieve IP address for $container_name_or_id"
fi
