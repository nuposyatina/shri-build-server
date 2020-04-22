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

const unregisterAgent = (agent) => {
  agents.delete(agent);
}

module.exports = { getAgents, setAgent, nextAgent, unregisterAgent, agents };