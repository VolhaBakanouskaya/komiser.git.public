package droplets

import (
	"context"
	"log"
	"time"

	. "github.com/mlabouardy/komiser/models"
	. "github.com/mlabouardy/komiser/providers"
	"github.com/oracle/oci-go-sdk/core"
)

func Instances(ctx context.Context, client ProviderClient) ([]Resource, error) {
	resources := make([]Resource, 0)
	computeClient, err := core.NewComputeClientWithConfigurationProvider(client.OciClient)
	if err != nil {
		return resources, err
	}

	tenancyOCID, err := client.OciClient.TenancyOCID()
	if err != nil {
		return resources, err
	}

	config := core.ListInstancesRequest{
		CompartmentId: &tenancyOCID,
	}

	output, err := computeClient.ListInstances(context.Background(), config)
	if err != nil {
		return resources, err
	}

	for _, instance := range output.Items {
		tags := make([]Tag, 0)

		for key, value := range instance.FreeformTags {
			tags = append(tags, Tag{
				Key:   key,
				Value: value,
			})
		}

		resources = append(resources, Resource{
			Provider:  "OCI",
			Account:   client.Name,
			Service:   "VM",
			Region:    *instance.Region,
			Name:      *instance.DisplayName,
			Cost:      0,
			Tags:      tags,
			FetchedAt: time.Now(),
		})
	}

	log.Printf("[%s] Fetched %d DigitalOcean Droplets\n", client.Name, len(resources))
	return resources, nil
}
