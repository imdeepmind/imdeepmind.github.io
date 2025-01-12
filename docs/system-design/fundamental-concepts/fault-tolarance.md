---
sidebar_position: 5
---

# Fault Tolerance

Fault tolerance is the ability of a system to continue operating properly in the event of a failure of one or more of its components.

## Key Concepts

1. **Redundancy:**

   - Incorporating duplicate components (e.g., multiple instances of a service) to take over if one fails.

2. **Replication:**

   - Copying data across multiple nodes to ensure it remains available and consistent despite node failures.

3. **Graceful Degradation:**

   - Allowing the system to operate in a reduced capacity rather than failing completely (e.g., serving cached data).

4. **Failover Systems:**
   - Automatically switching to a backup system in case of a primary system failure.

## Fault Tolerance Techniques

- **Active-Active Systems:** All systems are actively serving requests, providing load balancing and redundancy.
- **Active-Passive Systems:** A standby system is kept ready to take over if the active system fails.
- **Error Detection and Recovery:** Mechanisms like checksums and retries ensure errors are identified and corrected.
