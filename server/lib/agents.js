const agents = new Map();

const getAgents = () => {
  return Array.from(agents.values());
};

const setAgent = (agent) => {
  agents.set(`${agent.host}:${agent.port}`, agent);
};

module.exports = { getAgents, setAgent };