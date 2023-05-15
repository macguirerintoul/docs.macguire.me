1. connect 4TB A and backup VMs to 4TB A
2. remove all disks, connect 4TB B and install proxmox on 4TB B
3. connect 4TB A and restore VMs to 4TB B
4. format 4TB A and add it in RAID 1 to 4TB B

# Post install

## NIC passthrough

I'm using a VM for pfSense, so we have to pass through the NIC to the VM.
https://pve.proxmox.com/wiki/Pci_passthrough

I think the dell motherboard needed `intel_iommu=on` **outside the quotes** at the end of the first line of `/etc/kernel/cmdline` 

## Storage not found

There may be an error that Proxmox is looking for the install ISO that was used to create the VM. In my case, I commented out the line in `/etc/pve/qemu-server/{VMid}.conf` and everything worked fine from there