const {
    ShardingManager
} = require('discord.js');
const manager = new ShardingManager('./ElectroClient.js', {
    token: 'NzEzODU2MjEyMDcyMDA1NjMz.XsmNiA.VcKX8n7d8hvgfWzpFDRMwVdp8Bg'
});

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched Shard ${shard.id}`));