const agents = new Map();

const getAgents = () => {
  return agents.values();
};

const setAgent = (agent) => {
  agents.set(`${agent.host}:${agent.port}`, agent);
};

const nextAgent = (agents) => {
  return agents.next();
};

module.exports = { getAgents, setAgent, nextAgent };