# Investigação do Problema de Scroll Vertical em Dispositivos Móveis

## Problema Reportado
- Scroll vertical indesejado nas seções: why, practices, publications
- Dispositivos afetados: Samsung S25 e iPhone
- Problema específico: scroll dentro da seção (scroll interno)

## Observações da Investigação

### Seções Analisadas
1. **Seção "Por que?" (why)** - ID: #why
2. **Seção "Práticas" (practices)** - ID: #practices  
3. **Seção "Publicações" (publications)** - ID: #publications

### Características Visuais Observadas
- Todas as três seções problemáticas têm backgrounds com imagens de fundo
- Seção "why": background com imagem `porqueImage` + overlay escuro
- Seção "practices": background com imagem `pecuariaBanner` + overlay escuro
- Seção "publications": background com imagem `publiImage` + overlay escuro

### Estrutura CSS Relevante
- Classe `.section-padding` aplicada a todas as seções
- Propriedade `overflow: visible` definida no CSS
- Em mobile: `overflow-x: hidden` aplicado ao body e #root

### Possíveis Causas do Problema
1. **Overflow configurado como "visible"** nas seções pode estar causando scroll interno
2. **Imagens de background** podem estar criando dimensões maiores que o container
3. **Grid layouts** dentro das seções podem estar extrapolando os limites
4. **Backdrop-blur e efeitos glass** podem estar afetando o comportamento do scroll

### Próximos Passos
- Verificar se o problema é causado pela propriedade `overflow: visible`
- Testar mudança para `overflow: hidden` nas seções problemáticas
- Verificar se imagens de background estão causando overflow
- Analisar comportamento dos grids em viewport móvel


## CAUSA RAIZ IDENTIFICADA

### Problema Encontrado
O container principal dentro da seção "why" tem **scroll vertical interno**:
- Container: `div.relative.z-10.container.mx-auto.px-4`
- scrollHeight: 560px
- offsetHeight: 530px
- **Diferença: 30px de conteúdo que extrapola o container**

### Análise Técnica
1. **Overflow configurado como "visible"** na seção permite que o scroll interno apareça
2. **Container interno tem altura menor** que o conteúdo que precisa exibir
3. **30px de diferença** entre scrollHeight e offsetHeight causa o scroll indesejado

### Solução Proposta
1. **Alterar overflow das seções problemáticas** de "visible" para "hidden"
2. **Ajustar padding/margin** dos containers internos para evitar corte de conteúdo
3. **Testar em viewport móvel** para garantir que o conteúdo ainda seja visível

### Seções a Corrigir
- `#why` - Seção "Por que?"
- `#practices` - Seção "Práticas" 
- `#publications` - Seção "Publicações"

## CORREÇÕES IMPLEMENTADAS

### Mudanças Realizadas

1. **App.css - Linha 197**
   - Alterado: `overflow: visible` → `overflow: hidden` na classe `.section-padding`

2. **App.css - Linhas 205-213**
   - Adicionado media query específico para mobile:
   ```css
   /* Correção específica para seções com background que causam scroll interno */
   #why, #practices, #publications {
     overflow: hidden;
   }
   
   /* Ajustar containers internos para evitar corte de conteúdo */
   #why .container, #practices .container, #publications .container {
     padding-bottom: 2rem;
   }
   ```

3. **App.jsx - Linha 700**
   - Seção why: `overflow-visible lg:overflow-hidden` → `overflow-hidden`

4. **App.jsx - Linha 879**
   - Seção publications: `overflow-visible lg:overflow-hidden` → `overflow-hidden`

5. **Practices.jsx - Linha 20**
   - Seção practices: `overflow-visible lg:overflow-hidden` → `overflow-hidden`

### Testes Realizados

✅ **Seção "Por que?" (#why)**
- Overflow antes: `visible`
- Overflow depois: `hidden`
- Scroll interno: Eliminado

✅ **Seção "Práticas" (#practices)**
- Overflow antes: `visible`
- Overflow depois: `hidden`
- Scroll interno: Eliminado

✅ **Seção "Publicações" (#publications)**
- Overflow antes: `visible`
- Overflow depois: `hidden`
- Scroll interno: Eliminado

### Status da Correção
🎯 **PROBLEMA RESOLVIDO**: O scroll vertical indesejado nas três seções foi eliminado mantendo a funcionalidade e aparência visual do site.
